/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./github-repo.d.ts" />
/// <reference path="./slideout.d.ts" />
/// <reference path="../browser/Trendy.d.ts" />

declare module NodeJS {
    interface Global {
        require(m: string): any;
    }
}

// Type definitions for the Electron 0.25.2 renderer process (web page)
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module ElectronRenderer {
    export class InProcess implements NodeJS.EventEmitter {
        addListener(event: string, listener: Function): InProcess;
        on(event: string, listener: Function): InProcess;
        once(event: string, listener: Function): InProcess;
        removeListener(event: string, listener: Function): InProcess;
        removeAllListeners(event?: string): InProcess;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        /**
         * Send ...args to the renderer via channel in asynchronous message, the main
         * process can handle it by listening to the channel event of ipc module.
         */
        send(channel: string, ...args: any[]): void;
        /**
         * Send ...args to the renderer via channel in synchronous message, and returns
         * the result sent from main process. The main process can handle it by listening
         * to the channel event of ipc module, and returns by setting event.returnValue.
         * Note: Usually developers should never use this API, since sending synchronous
         * message would block the whole renderer process.
         * @returns The result sent from the main process.
         */
        sendSync(channel: string, ...args: any[]): string;
        /**
         * Like ipc.send but the message will be sent to the host page instead of the main process.
         * This is mainly used by the page in <webview> to communicate with host page.
         */
        sendToHost(channel: string, ...args: any[]): void;
    }

    interface Remote {
        /**
         * @returns The object returned by require(module) in the main process.
         */
        require(module: string): any;
        /**
         * @returns The BrowserWindow object which this web page belongs to.
         */
        getCurrentWindow(): GitHubElectron.BrowserWindow
        /**
         * @returns The global variable of name (e.g. global[name]) in the main process.
         */
        getGlobal(name: string): any;
        /**
         * Returns the process object in the main process. This is the same as
         * remote.getGlobal('process'), but gets cached.
         */
        process: any;
    }

    interface WebFrame {
        /**
         * Changes the zoom factor to the specified factor, zoom factor is
         * zoom percent / 100, so 300% = 3.0.
         */
        setZoomFactor(factor: number): void;
        /**
         * @returns The current zoom factor.
         */
        getZoomFactor(): number;
        /**
         * Changes the zoom level to the specified level, 0 is "original size", and each
         * increment above or below represents zooming 20% larger or smaller to default
         * limits of 300% and 50% of original size, respectively.
         */
        setZoomLevel(level: number): void;
        /**
         * @returns The current zoom level.
         */
        getZoomLevel(): number;
        /**
         * Sets a provider for spell checking in input fields and text areas.
         */
        setSpellCheckProvider(language: string, autoCorrectWord: boolean, provider: {
            /**
             * @returns Whether the word passed is correctly spelled.
             */
            spellCheck: (text: string) => boolean;
        }): void;
        /**
         * Sets the scheme as secure scheme. Secure schemes do not trigger mixed content
         * warnings. For example, https and data are secure schemes because they cannot be
         * corrupted by active network attackers.
         */
        registerUrlSchemeAsSecure(scheme: string): void;
    }

    interface Shell{
        /**
         * Show the given file in a file manager. If possible, select the file.
         */
        showItemInFolder(fullPath: string): void;
        /**
         * Open the given file in the desktop's default manner.
         */
        openItem(fullPath: string): void;
        /**
         * Open the given external protocol URL in the desktop's default manner
         * (e.g., mailto: URLs in the default mail user agent).
         */
        openExternal(url: string): void;
        /**
         * Move the given file to trash and returns boolean status for the operation.
         */
        moveItemToTrash(fullPath: string): void;
        /**
         * Play the beep sound.
         */
        beep(): void;
    }

    interface Webview extends HTMLElement {
        src: string;
        useragent: string;
        httpreferrer: string;
        preload: string;

        openDevTools(): void;
        goBack(): void;
        goForward(): void;
        canGoBack(): boolean;
        canGoForward(): boolean;
        reload(): void;
        undo(): void;
        redo(): void;
        cut(): void;
        copy(): void;
        paste(): void;
        selectAll(): void;
        executeJavaScript(src: string): void;
        insertCSS(src: string): void;
        getUrl(): string;
        stop(): void;
        getTitle(): string;
    }

}

