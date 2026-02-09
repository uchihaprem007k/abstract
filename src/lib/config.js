/**
 * Premium SvelteKit Template - Configuration
 * 
 * This is the central configuration file. Customize these values
 * to match your brand and content.
 */

export const siteConfig = {
	// Site Identity
	siteName: 'THE ABSTRACT',

	// Navigation Links
	navLinks: [
		{ name: 'Solutions', href: '#services' },
		{ name: 'Expertise', href: '#manifesto' },
		{ name: 'Process', href: '#blueprint' },
		{ name: 'Contact', href: '#contact' }
	],

	// CTA Button Configuration
	ctaButton: {
		text: 'Start a Project',
		href: '#contact'
	},

	// Hero Section
	hero: {
		headline: 'THE ABSTRACT',
		subtitle: 'End-to-End Digital Solutions for the Modern Enterprise. We build, launch, and scale exceptional digital products with precision.',
		videoSrc: '/videos/hero-main-loop.mp4',
		ctaText: 'Build Your Vision'
	},

	// Features Section (Horizontal Sticky Scroll)
	features: {
		title: 'Our Expertise',
		subtitle: 'Comprehensive IT and Digital Services',
		items: [
			{
				number: '01',
				title: 'Product Development',
				description: 'Custom website and mobile app development using modern, scalable architectures. We transform complex requirements into high-performance digital tools.',
				mediaSrc: '/videos/card-software-flow.mp4'
			},
			{
				number: '02',
				title: 'UI/UX Design',
				description: 'User-centric design systems that prioritize clarity and engagement. We create intuitive interfaces that align with your brand identity and business goals.',
				mediaSrc: '/videos/card-architecture-holo.mp4'
			},
			{
				number: '03',
				title: 'Digital Strategy',
				description: 'Growth-focused performance marketing, SEO, and social media management. We provide data-driven strategies to elevate your digital presence and ROI.',
				mediaSrc: '/videos/card-engineering-mech.mp4'
			}
		]
	},

	// SEO Meta
	meta: {
		title: 'THE ABSTRACT - Modern IT Services & Digital Solutions',
		description: 'A full-service IT company specializing in web development, mobile apps, UI/UX design, and digital marketing. From idea to impact.',
		keywords: 'it services, web development, mobile apps, digital marketing, seo, branding'
	}
};


