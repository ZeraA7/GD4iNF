(function() {
    const target = document.getElementById('engine_target');
    if (!target) return;

    let isDragging = false;
    let startX, startY;

    target.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        startY = e.pageY;
        e.preventDefault();
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        // Snap back to original position
        target.style.transform = 'translate(0, 0)';
        target.style.filter = 'blur(0px)';
    });

    target.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const dx = e.pageX - startX;
        const dy = e.pageY - startY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Intensity of blur based on drag distance
        const blurAmount = Math.min(dist * 0.1, 15); 
        
        target.style.transform = `translate(${dx}px, ${dy}px)`;
        target.style.filter = `blur(${blurAmount}px) brightness(1.2)`;
    });
})();

