(() => {
   // https://blotter.js.org/#/documentation
   let container = document.getElementById('main')
   const text = new Blotter.Text('Hello, handsome', {
      family: 'serif',
      size: 120,
      fill: '#fff',
      paddingRight: 50,
      paddingLeft: 50,
   })

   let material = new Blotter.LiquidDistortMaterial();
   material.uniforms.uSpeed.value = 0.3;
   material.uniforms.uVolatility.value = 0.1;
   material.uniforms.uSpeed.value = 0.1;

   let blotter = new Blotter(material, {
      texts: text
   })
   let scope = blotter.forText(text)
   scope.appendTo(container)




})();
