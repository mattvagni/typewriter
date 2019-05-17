/**
 *  This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */

import * as Segment from './segment'

/**
 * Don't do this.
 */
export interface I42TerribleEventName3 {
	/**
	 * Really, don't do this.
	 */
	'0000---terrible-property-name~!3'?: any
	/**
	 * Duplicate key error in Android
	 */
	identifierId?: any
	/**
	 * AcronymStyle bug fixed in v5.0.1
	 */
	identifier_id?: any
}
/**
 * Optional array property
 */
export interface OptionalArray {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * Optional object property
 */
export interface OptionalObject {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * Required array property
 */
export interface RequiredArray {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * Required object property
 */
export interface RequiredObject {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * This event contains all supported variations of properties.
 */
export interface ExampleEvent {
	/**
	 * Optional any property
	 */
	'optional any'?: any
	/**
	 * Optional array property
	 */
	'optional array'?: OptionalArray[]
	/**
	 * Optional array (empty) property
	 */
	'optional array (empty)'?: any[]
	/**
	 * Optional boolean property
	 */
	'optional boolean'?: boolean
	/**
	 * Optional integer property
	 */
	'optional int'?: number
	'optional nullable string'?: string | null
	/**
	 * Optional number property
	 */
	'optional number'?: number
	'optional number or string'?: number | string
	/**
	 * Optional object property
	 */
	'optional object'?: OptionalObject
	/**
	 * Optional object (empty) property
	 */
	'optional object (empty)'?: Record<string, any>
	/**
	 * Optional string property
	 */
	'optional string'?: string
	/**
	 * Optional string regex property
	 */
	'optional string regex'?: string
	/**
	 * Required any property
	 */
	'required any': any
	/**
	 * Required array property
	 */
	'required array': RequiredArray[]
	/**
	 * Required array (empty) property
	 */
	'required array (empty)': any[]
	/**
	 * Required boolean property
	 */
	'required boolean': boolean
	/**
	 * Required integer property
	 */
	'required int': number
	'required nullable string': string | null
	/**
	 * Required number property
	 */
	'required number': number
	'required number or string': number | string
	/**
	 * Required object property
	 */
	'required object': RequiredObject
	/**
	 * Required object (empty) property
	 */
	'required object (empty)': Record<string, any>
	/**
	 * Required string property
	 */
	'required string': string
	/**
	 * Required string regex property
	 */
	'required string regex': string
}

/** Options to customize the runtime behavior of a Typewriter client. */
export interface TypewriterOptions {
	/**
	 * Handler fired when if an event does not match its spec. Returns a boolean
	 * indicating if the message should still be sent to Segment. This handler
	 * does not fire in production mode, because it requires inlining the full
	 * JSON Schema spec.
	 *
	 * By default, it will throw errors if NODE_ENV = "test" so that tests will fail
	 * if a message does not match the spec. Otherwise, errors will be logged to stderr.
	 * Also by default, invalid messages will be dropped.
	 */
	onValidationError?: ValidationErrorHandler
}

export type ValidationErrorHandler = (
	message: Record<string, any>,
	validationErrors: any[]
) => boolean

/**
 * Update the run-time configuration of this Typewriter client.
 * Note that this is currently a no-op for production builds.
 */
export function setTypewriterOptions(options: TypewriterOptions) {}

/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext(options: Segment.Options = {}): Segment.Options {
	return {
		...options,
		context: {
			...(options.context || {}),
			typewriter: {
				language: 'ts',
				version: '7.0.0',
			},
		},
	}
}

/**
 * Don't do this.
 */
export function I42TerribleEventName3(
	props: I42TerribleEventName3,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'42_--terrible=="event\'++name~!3',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * This is JSON Schema draft-04 event.
 */
export function draft04Event(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'Draft-04 Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * This is JSON Schema draft-06 event.
 */
export function draft06Event(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'Draft-06 Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * This is an empty event.
 */
export function emptyEvent(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'Empty Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * This event contains all supported variations of properties.
 */
export function exampleEvent(
	props: ExampleEvent,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'Example Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * checkin != check_in bug
 */
export function checkIn(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'check_in',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * checkin != check_in bug
 */
export function checkin(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'checkin',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
