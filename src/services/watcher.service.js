import { storageService } from "./async-storage.service.js";
import {utilService} from "./utils.service.js";

const ENTITY_TYPE = "watchers"
export const watcherService = {
    addWatcher,
    getWatchers,
    getWatcherById,
    removeWatcher,
    updateWatcher
}

export class Watcher {
    constructor(name = "Jack Ma", movies = ["Dragon Boat"]) {
        this.id = utilService.makeId()
        this.fullname = name
        this.movies = movies
    }
}
async function getWatchers() {
    let response = await storageService.query(ENTITY_TYPE)
    return response || []
}

async function addWatcher(newWatcher) {
    let watchers = await getWatchers()
    await storageService.post(ENTITY_TYPE, [...watchers, newWatcher])
}

async function getWatcherById(id) {
    let watchers = await getWatchers()
    return watchers.find(watcher => watcher.id === id)
}

async function removeWatcher(id) {
    return await storageService.remove(ENTITY_TYPE, id)
}

async function updateWatcher(updatedWatcher) {
    return await storageService.put(ENTITY_TYPE, updatedWatcher)
}