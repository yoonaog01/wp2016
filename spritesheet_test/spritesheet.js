var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, stand: stand, walk: walk, jump: jump, climb: climb, attack: attack });

var sprite;

function preload() {

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
                
    game.load.spritesheet('chr', 'sample.png', 92, 95, 11);

  }

function stand() {

    sprite = game.add.sprite(40, 100, 'chr');
    sprite.animations.add('stand',[0]);
    sprite.animations.play('stand',2,true);

  }

function walk() {

    sprite = game.add.sprite(140, 100, 'chr');
        sprite.animations.add('walk',[1, 2, 3, 4]);
            sprite.animations.play('walk',2,true);

              }

function jump() {

    sprite = game.add.sprite(240, 100, 'chr');
        sprite.animations.add('jump',[5]);
            sprite.animations.play('jump',2,true);

              }

function climb() {

    sprite = game.add.sprite(340, 100, 'chr');
        sprite.animations.add('climb',[6, 7]);
            sprite.animations.play('climb',2,true);

              }

function attack() {

    sprite = game.add.sprite(440, 100, 'chr');
        sprite.animations.add('attack',[8, 9, 10]);
            sprite.animations.play('attack',2,true);

              }

