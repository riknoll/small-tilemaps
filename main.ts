
namespace tiles {
    //% blockId=small_tilemap_editor block="set 8x8 tilemap to $tilemap"
    //% weight=200 blockGap=8
    //% tilemap.fieldEditor="tilemap"
    //% tilemap.fieldOptions.decompileArgumentAsString="true"
    //% tilemap.fieldOptions.filter="tile"
    //% tilemap.fieldOptions.taggedTemplate="tilemap"
    //% tilemap.fieldOptions.tileWidth=8
    //% blockNamespace="scene" group="Tiles" duplicateShadowOnDrag
    //% help=tiles/set-tile-map
    export function setSmallTilemap(tilemap: TileMapData) {
        scene.setTileMapLevel(tilemap);
    }
}