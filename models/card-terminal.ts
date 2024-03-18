/*
The Helcim API

This API covers publicly accessible merchant actions

The version of the OpenAPI document: 2.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CardTerminalAddress } from './card-terminal-address';

/**
 * 
 * @export
 * @interface CardTerminal
 */
export interface CardTerminal {
    /**
     * Id of the terminal.
     * @type {number}
     * @memberof CardTerminal
     */
    'id'?: number;
    /**
     * Nickname of terminal
     * @type {string}
     * @memberof CardTerminal
     */
    'nickname'?: string;
    /**
     * Currency of terminal. possible values are CAD | USD
     * @type {string}
     * @memberof CardTerminal
     */
    'currency'?: string;
    /**
     * Status of Terminal. possible values are ACTIVE | INACTIVE
     * @type {string}
     * @memberof CardTerminal
     */
    'status'?: string;
    /**
     * 
     * @type {CardTerminalAddress}
     * @memberof CardTerminal
     */
    'address'?: CardTerminalAddress;
}

