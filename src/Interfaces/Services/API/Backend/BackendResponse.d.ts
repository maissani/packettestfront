/**
 *
 * @export
 * @interface BackendResponse
 */

export interface BackendResponse {
	/**
	 *
	 * @type {string}
	 * @memberof BackendResponse
	 */
	id: string;

	/**
	 *
	 * @type {Array}
	 * @memberof BackendResponse
	 */
	moves: Array;

	/**
	 *
	 * @type {boolean}
	 * @memberof BackendResponse
	 */
	isStartedWithX: boolean;
}
