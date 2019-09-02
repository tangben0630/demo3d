function createSpriteText(p, con, isPhone) {
	let canvas = document.createElement("canvas");
	let ctx = canvas.getContext("2d")
	ctx.canvas.width =50;
	ctx.fillStyle = "#000000";
	ctx.font = "100px Arial";
	// ctx.lineWidth = 10;
	ctx.fillText(con,0,100);
	let texture = new THREE.Texture(canvas);
	texture.needsUpdate = true;

	//使用Sprite显示文字
	// textObj.rotation.x = Math.PI/2;
	let material = new THREE.SpriteMaterial({map:texture, alphaTest: 0.1,depthTest: true});
	let textObj = new THREE.Sprite(material);
	textObj.scale.set(10, 12, 30);
	
	textObj.position.set(p.x,p.y,10);
	return textObj;
}