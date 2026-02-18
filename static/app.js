// Static site health check (mock)
fetch('/api/health')
    .then(r => {
        if (r.ok) return r.json();
        throw new Error('API not available');
    })
    .then(data => {
        const el = document.getElementById('status');
        if (data && data.ok) {
            el.className = 'ok';
            el.querySelector('.text').textContent = 'API connected';
        }
    })
    .catch(() => {
        // Fallback for static site deployment
        const el = document.getElementById('status');
        el.className = 'ok'; // Show green for demo purposes
        el.querySelector('.text').textContent = 'Static Mode (Demo)';
        console.log('Running in static mode - API actions will be simulated');
    });
