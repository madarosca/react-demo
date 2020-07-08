import React from 'react'
import L from 'leaflet'
import 'leaflet-draw'
import './leaflet.css'
import './leaflet-draw.css'

const TILES_PROVIDER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const MAP_LICENCE = 'https://openstreetmap.org'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const layersFromDb = [
	{
		id: 1,
		type: 'Feature',
		surface: '7910.22 ha',
		style: {
			color: '#234C5F',
			fillColor: '#234C5F',
			weight: 0.5,
			fillOpacity: 0.8
		},
		geometry: {
			type: 'Polygon',
			coordinates: [
				[
					[25.418785, 45.656027],
					[25.418785, 45.716113],
					[25.568372, 45.716113],
					[25.568372, 45.656027],
					[25.418785, 45.656027]
				]
			]
		}
	},
	{
		id: 2,
		type: 'Feature',
		surface: '16239.11 ha',
		style: {
			color: '#234C5F',
			fillColor: '#234C5F',
			weight: 0.5,
			fillOpacity: 1
		},
		geometry: {
			type: 'Polygon',
			coordinates: [
				[
					[25.649895, 45.852198],
					[25.660109, 45.755599],
					[25.81196, 45.76704],
					[25.844162, 45.808872],
					[25.72703, 45.902702],
					[25.649895, 45.852198]
				]
			]
		}
	}
]

export default class Maps extends React.Component {
	state = {
		layers: [],
		layersFromDb: layersFromDb
	}

	baseGeoJsonLayer = null

	componentDidMount() {
		const { layersFromDb } = this.state

		this.map = L.map('map', {
			center: [45.65, 25.6],
			zoom: 10,
			maxZoom: 20,
			minZoom: 2,
			zoomAnimation: true,
			markerZoomAnimation: true,
			fadeAnimation: true,
			detectRetina: true,
			scrollWheelZoom: true,
			touchZoom: true,
			doubleClickZoom: true,
			dragging: true
		})

		L.tileLayer(TILES_PROVIDER, {
			attribution: `Map data © <a href="${MAP_LICENCE}">OpenStreetMap</a>`,
			subdomains: ['a', 'b', 'c']
		}).addTo(this.map)

		const newMarker = L.marker([45.65, 25.6], { draggable: true })
			.addTo(this.map)
			.bindPopup('A popup on marker click.<br /> Add another marker!')
			.openPopup()
			.on('dragend', () => {
				const { lat, lng } = this.parseLatLng(newMarker.getLatLng())
				alert([lat[1], lng[0]])
			})

		const drawnItems = new L.FeatureGroup()
		this.map.addLayer(drawnItems)

		const dbLayers = this.getBaseGeoJsonLayer(layersFromDb)
		dbLayers.map((layer) => drawnItems.addLayer(layer))

		const drawControl = new L.Control.Draw({
			position: 'topleft',
			draw: {
				circle: false,
				circlemarker: false
			},
			edit: {
				featureGroup: drawnItems,
				remove: true
			}
		})
		this.map.addControl(drawControl)

		this.map.on(L.Draw.Event.CREATED, (e) => {
			const type = e.layerType,
				layer = e.layer

			if (type === 'marker') {
				layer
					.on('click', ({ latlng }) => layer.bindPopup(`Coordinates:<br /> [${latlng.lat}, ${latlng.lng}]`))
					.on('dragend', ({ latlng }) => console.log([latlng.lat, latlng.lng]))
			}

			drawnItems.addLayer(layer)

			const json = drawnItems.toGeoJSON()

			let shapeArea

			if (type !== 'marker') {
				shapeArea = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0])
				shapeArea = L.GeometryUtil.readableArea(shapeArea, true, { ha: 2 })

				layer.on('click', () => layer.bindPopup(`Area: ${shapeArea}`))
			}

			this.handleAddLayer(type, shapeArea, json)
		})

		this.map.on(L.Draw.Event.EDITED, (e) => {
			const layers = e.layers

			layers.eachLayer((layer) => {
				drawnItems.addLayer(layer)
				const json = drawnItems.toGeoJSON()

				if (layer.feature) {
					this.handleEditLayer(layer.feature.id, json)
				}
			})
		})

		this.map.on('click', (event) => {
			this.handleAddMarker(event)
		})
	}

	/**
	 * add overlay layer to map
	 * @param {Object} featureCollection
	 */
	getBaseGeoJsonLayer = (featureCollection) => {
		this.baseGeoJsonLayer = L.geoJSON(featureCollection, {
			style: function (feature) {
				return feature.style
			},
			onEachFeature: function (feature, layer) {
				layer.on('click', () => layer.bindPopup(`Area: ${layer.feature.surface}`))
				if (layer.getLayers) {
					layer.getLayers().forEach(function (l) {
						featureCollection.addLayer(l)
					})
				}
			}
		}).addTo(this.map)

		const layers = this.baseGeoJsonLayer.getLayers()

		if (layers.length > 0) {
			const bounds = this.baseGeoJsonLayer.getBounds()

			this.map.fitBounds(bounds, {
				animate: false
			})
		}

		return layers
	}

	/**
	 *
	 * @param {string} latLng
	 * @return {{lat: string[], lng: string[]}}
	 */
	parseLatLng = (latLng) => {
		const coordinates = String(latLng).split(',')
		const lat = coordinates[0].split('(')
		const lng = coordinates[1].split(')')
		return { lat, lng }
	}

	render() {
		return (
			<div className='w-100' id='map'></div>
		)
	}

	/**
	 * Handle add pin
	 * @param {Object} event
	 */
	handleAddMarker = (event) => {
		//const { lat, lng } = this.parseLatLng(event.latlng.toString());
	}

	/**
	 * Handle add layer
	 * @param {String} type
	 * @param {String} shapeArea
	 * @param {Object} json
	 */
	handleAddLayer = (type, shapeArea, json) => {
		const { layers } = this.state

		const id = Math.floor(Math.random() * 500 + 1)

		const newJson = json.features.map((feature) =>
			!feature.id
				? {
						id,
						type: feature.type,
						surface: shapeArea,
						geometry: feature.geometry
				  }
				: feature
		)

		const newLayers = [newJson, ...layers]

		this.setState({ layers: newLayers, layersFromDb: newJson })
	}

	/**
	 * Handle edit layer
	 * @param {String} id
	 * @param {Object} json
	 */
	handleEditLayer = (id, json) => {
		const newJson = id ? json.features.map((feature) => (feature.id === id ? { id, ...feature } : feature)) : json

		this.setState({ layersFromDb: newJson })
	}
}
