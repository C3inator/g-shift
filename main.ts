scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.splash("Level 1", "Cleared!")
    tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020101020000000000000000000000000001010101010101010000000000000000010101010101010100000000000000000101010101010101000000000000000002020103000001010000000000000000020201000000010100000000000000000101010000000101000000000000000001010100000001010100000000000000010101000000000000000000000000000101010000000000000000000000000001010100000000000000000000000000010101000000000000000000000000000101010000000000000000000000000001010100000000000000000000000000010101020202020202020202020202020101`, img`
        . . . . . . . . . . . . . . 2 2 
        . . . . . . . . . . . . . . 2 2 
        2 2 2 2 2 2 . . . . . . . . 2 2 
        2 2 2 2 2 2 . . . . . . . . 2 2 
        2 2 2 2 2 2 . . . . . . . . . . 
        2 . . . 2 2 . . . . . . . . . . 
        2 . . . 2 2 . . . . . . . . 2 2 
        2 . . . 2 2 . . . . . . . . 2 2 
        2 . . . 2 2 2 . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 2 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7], TileScale.Sixteen))
    mySprite.setPosition(30, 27)
    mySprite.setVelocity(0, 1000)
    mySprite.ax = 0
    mySprite.ay = 500
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f 9 f 9 f 9 f 2 1 f . . 
        . f 1 2 f f 9 9 9 f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    game.splash("Bonus Level 1", "Cleared!")
    tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020000000000000000000000000000020101010101000000000000000000000201010101010000000000000000000002010101010100000000000000000000020203000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000202020202020202020202020202020202`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 . . . . . . . . . . . 
        2 2 2 2 2 . . . . . . . . . . . 
        2 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile5], TileScale.Sixteen))
    mySprite.setPosition(30, 27)
    mySprite.setVelocity(0, 100)
    mySprite.ax = 0
    mySprite.ay = 500
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f 9 f 9 f 9 f 2 1 f . . 
        . f 1 2 f f 9 9 9 f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    game.splash("Level 3", "Cleared!")
    if (game.ask("Want to play", "the Bonus Levels?")) {
        game.splash("Hint:")
        game.splash("You can shift gravity", "in mid-air.")
        tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000003020200000000000000000000010101010102000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000201010100000000000000000000000002010101000000000000000000000000020101010000000000000000000000000201010102020202020202020202020202`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 2 2 2 2 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile4], TileScale.Sixteen))
        mySprite.setPosition(30, 186)
        mySprite.setVelocity(0, 100)
        mySprite.ax = 0
        mySprite.ay = 500
        controller.moveSprite(mySprite, 100, 0)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
            . f 1 2 f f f f f f f 2 1 f . . 
            . f 1 2 f f f 9 f f f 2 1 f . . 
            . f 1 2 f f f 9 f f f 2 1 f . . 
            . f 1 2 f f f 9 f f f 2 1 f . . 
            . f 1 2 f 9 f 9 f 9 f 2 1 f . . 
            . f 1 2 f f 9 9 9 f f 2 1 f . . 
            . f 1 2 f f f 9 f f f 2 1 f . . 
            . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        game.over(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    game.splash("Bonus Level 3", "Cleared!")
    game.splash("Truly, you are", "The Greatest of Gamers!")
    game.over(true, effects.starField)
})
controller.combos.attachCombo("a+d", function () {
    controller.moveSprite(mySprite, 100, 0)
    mySprite.startEffect(effects.rings, 500)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f 9 f 9 f 9 f 2 1 f . . 
        . f 1 2 f f 9 9 9 f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.setVelocity(0, 1000)
    mySprite.ax = 0
    mySprite.ay = 500
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    game.splash("Level 2", "Cleared!")
    tiles.setTilemap(tiles.createTilemap(hex`1000100001020202020202020202020202020101010000000000000000000000000001010100000000000000000000000000010101000000000000000000000000000002010000000000000000000000000000020100000000000000000000000000000201000000000000010000000000000002010000000000000100000000000000020200000000000001000000000000000202000000000000010300000000000002020000000000000100000000000000020200000000000001000000000000000202000000000000010000000000000002020000000000000100000101010101010101010000000000000000000000000001010102020202020202020202020202`, img`
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . 2 . . . . . . . . 
        2 . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . 2 2 2 2 2 2 
        2 2 2 . . . . . . . . . . . . . 
        2 2 2 . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile8], TileScale.Sixteen))
    mySprite.setPosition(30, 218)
    mySprite.setVelocity(0, 100)
    mySprite.ax = 0
    mySprite.ay = 500
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f 9 f 9 f 9 f 2 1 f . . 
        . f 1 2 f f 9 9 9 f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    game.over(false)
})
controller.combos.attachCombo("a+r", function () {
    controller.moveSprite(mySprite, 0, 100)
    mySprite.startEffect(effects.rings, 500)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 2 f f f f 9 f f 2 1 f . . 
        . f 1 2 f f f f f 9 f 2 1 f . . 
        . f 1 2 f 9 9 9 9 9 9 2 1 f . . 
        . f 1 2 f f f f f 9 f 2 1 f . . 
        . f 1 2 f f f f 9 f f 2 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.setVelocity(1000, 0)
    mySprite.ax = 500
    mySprite.ay = 0
})
controller.combos.attachCombo("a+l", function () {
    controller.moveSprite(mySprite, 0, 100)
    mySprite.startEffect(effects.rings, 500)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 2 f f 9 f f f f 2 1 f . . 
        . f 1 2 f 9 f f f f f 2 1 f . . 
        . f 1 2 9 9 9 9 9 9 f 2 1 f . . 
        . f 1 2 f 9 f f f f f 2 1 f . . 
        . f 1 2 f f 9 f f f f 2 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.setVelocity(-1000, 0)
    mySprite.ax = -500
    mySprite.ay = 0
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.splash("Bonus Level 2", "Cleared!")
    tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000202000000000000010000000000000002020000000000000100000000000000020200000000000001000000000000000202000000000000010300000000000002020000000000000100000000000000020200000000000001000000000000000202000000000000010000000000000002020000000000000100000000000000020101010000000000000000000000000201010102020202020202020202020202`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        2 2 2 . . . . . . . . . . . . . 
        2 2 2 . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile9], TileScale.Sixteen))
    mySprite.setPosition(30, 218)
    mySprite.setVelocity(0, 100)
    mySprite.ax = 0
    mySprite.ay = 500
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f 9 f 9 f 9 f 2 1 f . . 
        . f 1 2 f f 9 9 9 f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.combos.attachCombo("a+u", function () {
    controller.moveSprite(mySprite, 100, 0)
    mySprite.startEffect(effects.rings, 500)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f 9 9 9 f f 2 1 f . . 
        . f 1 2 f 9 f 9 f 9 f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f 9 f f f 2 1 f . . 
        . f 1 2 f f f f f f f 2 1 f . . 
        . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.setVelocity(0, -1000)
    mySprite.ax = 0
    mySprite.ay = -500
})
let mySprite: Sprite = null
game.splash("To shift gravity,")
game.splash("Press A and a direction", "at the same time.")
game.splash("Press A to Start!")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
    . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
    . f 1 2 f f f f f f f 2 1 f . . 
    . f 1 2 f f f 9 f f f 2 1 f . . 
    . f 1 2 f f f 9 f f f 2 1 f . . 
    . f 1 2 f f f 9 f f f 2 1 f . . 
    . f 1 2 f 9 f 9 f 9 f 2 1 f . . 
    . f 1 2 f f 9 9 9 f f 2 1 f . . 
    . f 1 2 f f f 9 f f f 2 1 f . . 
    . f 1 1 2 2 2 2 2 2 2 1 1 f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
    . f f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(30, 186)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010303030303030303030101010101010100000000000000000001010101010101000000000000000000010101010101010000000000010000000003010101010100000000000100000002030101010101000000000001010101010101010101010000000000000101010101010101010100000000000001010101010300000000000000000000010101010103000000000000000000000101010101030000000001010100000001010101010300000000010101000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    2 2 2 2 2 . . . . . . . . . 2 2 
    2 2 2 2 2 . . . . . . . . . 2 2 
    2 2 2 2 2 . . . . . . . . . 2 2 
    2 2 2 2 2 . . . . . 2 . . . . . 
    2 2 2 2 2 . . . . . 2 . . . . . 
    2 2 2 2 2 . . . . . 2 2 2 2 2 2 
    2 2 2 2 2 . . . . . . 2 2 2 2 2 
    2 2 2 2 2 . . . . . . 2 2 2 2 2 
    . . . . . . . . . . . 2 2 2 2 2 
    . . . . . . . . . . . 2 2 2 2 2 
    . . . . . 2 2 2 . . . 2 2 2 2 2 
    . . . . . 2 2 2 . . . 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile6], TileScale.Sixteen))
