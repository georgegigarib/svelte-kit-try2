const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\guides\\__layout.reset.svelte"),
	() => import("..\\..\\src\\routes\\guides\\index.svelte"),
	() => import("..\\..\\src\\routes\\guides\\hello.svelte"),
	() => import("..\\..\\src\\routes\\guides\\[id].svelte"),
	() => import("..\\..\\src\\routes\\about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/guides/index.svelte
	[/^\/guides\/?$/, [c[3], c[4]], []],

	// src/routes/guides/hello.svelte
	[/^\/guides\/hello\/?$/, [c[3], c[5]], []],

	// src/routes/guides/[id].svelte
	[/^\/guides\/([^/]+?)\/?$/, [c[3], c[6]], [], (m) => ({ id: d(m[1])})],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[7]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];