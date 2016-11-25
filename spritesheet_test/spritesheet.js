var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

var sprite;

function preload() {

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
                
    game.load.spritesheet('chr', 'sample.png', 92, 95, 11);

  }

function create() {

    game.physics.arcade.enable(sprite);
    sprite = game.add.sprite(40, 100, 'chr');
    sprite.animations.add('stand',[0],10,true);
    sprite.animations.add('walk',[1, 2, 3, 4],10,true);
    sprite.animations.add('jump',[5],10,true);
    sprite.animations.add('climb',[6, 7],10.true);
    sprite.animations.add('attack',[8, 9, 10],10,true);
}

function update() {
    if (cusors.left.isDown) {
        sprite.body.velocity.x = -60;
        sprite.animations.play('walk');
    }

    else if (cusors.right.isDown) {
        sprite.body.velocity.x = 60;
        sprite.animations.play('walk');
    }

    else if (cusors.up.isDown) {
        sprite.body.velocity.y = 20;
        sprite.animations.play('climb');
    }
      
    else if (cusors.down.isDown) {
        sprite.body.velocity.y = -20;
        sprite.animations.play('climb');
    }

/*    else if (cusors.a.isDown) {
        sprite.animations.play('attack');
    }*/

    else {
        sprite.animations.play('stand');
    }

}
