/* eslint-disable no-null/no-null */
/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react'

import {
	setTypewriterOptions,
	emptyEvent,
	everyRequiredType,
	everyOptionalType,
	everyNullableRequiredType,
	everyNullableOptionalType,
	I42TerribleEventName3,
	eventCollided,
	eventCollided1,
	nestedObjects,
	nestedArrays,
	defaultViolationHandler,
	propertiesCollided,
	propertyObjectNameCollision1,
	propertyObjectNameCollision2,
	simpleArrayTypes,
	unionType,
	defaultViolationHandlerCalled,
	customViolationHandler,
	customViolationHandlerCalled,
	propertySanitized,
} from '../analytics'

// const SIDECAR_ADDRESS = 'localhost:8443/v1'

export default class HomePage extends React.Component {
	public componentDidMount() {
		if (!window.analytics) {
			throw new Error("Seems like window.analytics isn't available")
		}

		this.runTestSuite()
	}

	public render() {
		return (
			<h1>
				Typewriter is <em>nifty</em>
			</h1>
		)
	}

	// Run through our standard test suite. See suite.test.ts.
	private runTestSuite() {
		emptyEvent()

		everyRequiredType({
			'required any': 'Rick Sanchez',
			'required array': [137, 'C-137'],
			'required boolean': false,
			'required int': 97,
			'required number': 3.14,
			'required object': {},
			'required string': 'Alpha-Betrium',
			'required string with regex': 'Lawyer Morty',
		})

		everyNullableRequiredType({
			'required any': null,
			'required array': null,
			'required boolean': null,
			'required int': null,
			'required number': null,
			'required object': null,
			'required string': null,
			'required string with regex': null,
		})

		everyNullableOptionalType()

		everyOptionalType()

		I42TerribleEventName3()

		propertySanitized({
			'0000---terrible-property-name~!3': 'what a cronenberg',
		})

		eventCollided()

		eventCollided1()

		propertiesCollided({
			'Property Collided': 'The Citadel',
			property_collided: 'Galactic Prison',
		})

		propertyObjectNameCollision1({
			universe: {
				name: 'Froopyland',
				occupants: [
					{
						name: 'Beth Smith',
					},
					{
						name: 'Thomas Lipkip',
					},
				],
			},
		})

		propertyObjectNameCollision2({
			universe: {
				name: 'Froopyland',
				occupants: [
					{
						name: 'Beth Smith',
					},
					{
						name: 'Thomas Lipkip',
					},
				],
			},
		})

		simpleArrayTypes({
			any: [137, 'C-137'],
			boolean: [true, false],
			integer: [97],
			number: [3.14],
			object: [
				{
					name: 'Beth Smith',
				},
			],
			string: ['Alpha-Betrium'],
		})

		nestedObjects({
			garage: {
				tunnel: {
					'subterranean lab': {
						"jerry's memories": [],
						"morty's memories": [],
						"summer's contingency plan": 'Oh, man, it’s a scenario four.',
					},
				},
			},
		})

		nestedArrays({
			universeCharacters: [
				[
					{
						name: 'Morty Smith',
					},
					{
						name: 'Rick Sanchez',
					},
				],
				[
					{
						name: 'Cronenberg Morty',
					},
					{
						name: 'Cronenberg Rick',
					},
				],
			],
		})

		unionType({
			universe_name: 'C-137',
		})
		unionType({
			universe_name: 137,
		})
		unionType({
			universe_name: null,
		})

		try {
			// This will trigger the Violation handler, iff running in development mode
			// because the regex will not match.
			defaultViolationHandler({
				'regex property': 'Not a Real Morty',
			})
		} catch (error) {
			// Validate that the default handler was called.
			if (
				!(error instanceof Error) ||
				!JSON.parse(error.toString()).description.startsWith(
					'You made an analytics call (Violation Handler Test)'
				)
			) {
				throw error
			}

			defaultViolationHandlerCalled()
		}

		// Register a custom onViolation handler.
		setTypewriterOptions({
			onViolation: (msg, violations) => {
				if (msg.event !== 'Custom Violation Handler' || violations.length !== 1) {
					throw new Error('Wrong message supplied to custom onViolation handler')
				}

				throw new Error('onViolation called')
			},
		})

		try {
			// This will trigger the Violation handler, iff running in development mode
			// because the regex will not match.
			customViolationHandler({
				'regex property': 'Not a Real Morty',
			})
		} catch (error) {
			// Validate that the custom handler was called.
			if (!(error instanceof Error) || !error.message.startsWith('onViolation called')) {
				throw error
			}

			customViolationHandlerCalled()
		}
	}
}
