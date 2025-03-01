(function() {
    // Inject favicon links
    const linkElements = [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
    ];

    linkElements.forEach(attrs => {
        const link = document.createElement('link');
        Object.keys(attrs).forEach(attr => link.setAttribute(attr, attrs[attr]));
        document.head.appendChild(link);
    });


    document.addEventListener('DOMContentLoaded', function() {
        const navHTML = `
            <nav class="bg-white shadow-lg">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex-shrink-0">
                            <a href="/" class="flex items-center">
                                <img src="/favicon/favicon.ico" style="height: 50px">
                                <span class="font-bold text-xl">Poly Mod</span>
                            </a>
                        </div>
                        
                        <div class="hidden md:flex space-x-8">
                            <a href="/" class="text-gray-700 hover:text-indigo-600">Home</a>
                            <a href="/mods" class="text-gray-700 hover:text-indigo-600">Mods</a>
                            <a href="/about" class="text-gray-700 hover:text-indigo-600">About</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
        
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterbegin', navHTML);
    });
    
})();
