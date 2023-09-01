import {utilService} from "./utils.service.js";

export const storageService = {
    post,   // Create
    get,    // Read
    put,    // Update
    remove, // Delete
    query,  // List
}

function query(entityType, delay = 500) {
    var entities = JSON.parse(localStorage.getItem(entityType))
    return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

function get(entityType) {
    return utilService.loadFromStorage(entityType)
}

function post(entityType, newEntity) {
    newEntity = JSON.parse(JSON.stringify(newEntity))
    // newEntity.id = utilService.makeId()
    utilService.saveToStorage(entityType, newEntity)
}

function put(entityType, updatedEntity) {
    updatedEntity = JSON.parse(JSON.stringify(updatedEntity))
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity.id === updatedEntity.id)
        if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity.id} in: ${entityType}`)
        entities.splice(idx, 1, updatedEntity)
        utilService.saveToStorage(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType, entityId) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity.id === entityId)
        if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1)
        utilService.saveToStorage(entityType, entities)
    })
}



