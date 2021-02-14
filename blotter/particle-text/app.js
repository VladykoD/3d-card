(() => {
   // https://blotter.js.org/#/documentation

   let container = document.getElementById('main');

   let text = new Blotter.Text('Sunshine', {
      family: 'serif',
      size: 200,
      fill: '#fff',
      paddingLeft: 80,
      paddingTop: 80,
      paddingRight: 80,
      paddingBottom: 80,
   })


   var customValues = {
      uDivisions: 5,
      uDivisionWidth: 0.25,
      uSpeed: 0.4,
      uAnimateHorizontal: true,
      uFlipAnimationDirection: true
   };

   var material = new Blotter.SlidingDoorMaterial();

   material.uniforms.uDivisions.value = customValues.uDivisions;
   material.uniforms.uDivisionWidth.value = customValues.uDivisionWidth;
   material.uniforms.uSpeed.value = customValues.speed;
   material.uniforms.uAnimateHorizontal.value = customValues.uAnimateHorizontal;
   material.uniforms.uFlipAnimationDirection.value = customValues.uFlipAnimationDirection;


   let blotter = new Blotter(material, {
      texts: text
   })

   let scope = blotter.forText(text)
   scope.appendTo(container)






})();
