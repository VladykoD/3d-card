(() => {
    const container = document.getElementById('main')

    let text = new Blotter.Text('OLOLOSH', {
        family: 'serif',
        size: 150,
        fill: '#000',
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 80,
        paddingBottom: 80,
    })

    const material = new Blotter.ChannelSplitMaterial();
    material.uniforms.uOffset.value = 0.03;
    material.uniforms.uRotation.value = 50;
    material.uniforms.uApplyBlur.value = 1;
    material.uniforms.uAnimateNoise.value = 0.3;

    const blotter = new Blotter(material, {
        texts: text
    })

    const scope = blotter.forText(text);
    scope.appendTo(container)



})();
