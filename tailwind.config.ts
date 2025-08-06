import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// macOS-specific colors
				menubar: {
					DEFAULT: 'hsl(var(--menubar-bg))',
					foreground: 'hsl(var(--menubar-text))'
				},
				dock: 'hsl(var(--dock-bg))',
				window: {
					DEFAULT: 'hsl(var(--window-bg))',
					header: 'hsl(var(--window-header))',
					border: 'hsl(var(--window-border))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// iOS-specific colors
				ios: {
					blue: '#007AFF',
					green: '#34C759',
					orange: '#FF9500',
					red: '#FF3B30',
					pink: '#FF2D92',
					purple: '#AF52DE',
					yellow: '#FFCC02',
					gray: {
						1: '#8E8E93',
						2: '#AEAEB2',
						3: '#C7C7CC',
						4: '#D1D1D6',
						5: '#E5E5EA',
						6: '#F2F2F7'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				// iOS-specific border radius
				'ios': '12px',
				'ios-lg': '16px',
				'ios-xl': '20px'
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-aurora': 'var(--gradient-aurora)',
				'gradient-glass': 'var(--gradient-glass)',
				// iOS-specific gradients
				'ios-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
				'ios-card': 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'window': 'var(--shadow-window)',
				'dock': 'var(--shadow-dock)',
				// iOS-specific shadows
				'ios': '0 2px 8px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)',
				'ios-lg': '0 4px 16px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)',
				'ios-xl': '0 8px 32px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.12)'
			},
			backdropBlur: {
				'macos': '20px',
				'ios': '25px',
				'ios-lg': '30px'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' }
				},
				'dock-bounce': {
					'0%': { transform: 'scale(1) translateY(0)' },
					'50%': { transform: 'scale(1.1) translateY(-5px)' },
					'100%': { transform: 'scale(1) translateY(0)' }
				},
				// iOS-specific animations
				'ios-bounce': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.95)' }
				},
				'ios-slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'ios-fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'dock-bounce': 'dock-bounce 0.3s ease-out',
				// iOS-specific animations
				'ios-bounce': 'ios-bounce 0.2s ease-out',
				'ios-slide-up': 'ios-slide-up 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'ios-fade-in': 'ios-fade-in 0.4s ease-out'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		// Custom plugin for scrollbar hiding
		function({ addUtilities }: any) {
			const newUtilities = {
				'.scrollbar-hide': {
					/* IE and Edge */
					'-ms-overflow-style': 'none',
					/* Firefox */
					'scrollbar-width': 'none',
					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
