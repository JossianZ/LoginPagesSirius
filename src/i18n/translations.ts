export interface TranslationSchema {
    login: {
        title: string
        subtitle: string
        googleButton: string
        or: string
        emailLabel: string
        emailPlaceholder: string
        passwordLabel: string
        passwordPlaceholder: string
        rememberMe: string
        forgotPassword: string
        loginButton: string
        noAccount: string
        createAccount: string
        footer: {
            copyright: string
            privacy: string
            terms: string
        }
    }
    hero: {
        version: string
        badge: {
            brand: string
            aiAssistant: string
            socialMedia: string
            blog: string
            email: string
        }
        title: string
        titleHighlight: string
        description: string
        features: {
            aiAssistant: {
                title: string
                description: string
            }
            happyUsers: {
                title: string
                description: string
            }
        }
    }
}

export const translations: Record<'tr' | 'en', TranslationSchema> = {
    tr: {
        login: {
            title: 'Giriş Yap',
            subtitle: 'Devam etmek için hesabınıza erişin.',
            googleButton: 'Google ile devam et',
            or: 'VEYA',
            emailLabel: 'E-posta',
            emailPlaceholder: 'isim@sirket.com',
            passwordLabel: 'Şifre',
            passwordPlaceholder: '••••••••',
            rememberMe: 'Beni Hatırla',
            forgotPassword: 'Şifremi Unuttum',
            loginButton: 'Giriş Yap',
            noAccount: 'Hesabınız yok mu?',
            createAccount: 'Hesap Oluştur',
            footer: {
                copyright: '© 2026 Lobster Lead Inc.',
                privacy: 'Gizlilik Sözleşmesi',
                terms: 'Kullanıcı Sözleşmesi'
            }
        },
        hero: {
            version: 'v2.0 Yayinda',
            badge: {
                brand: 'Marka',
                aiAssistant: 'AI Destekli',
                socialMedia: 'Sosyal Medya',
                blog: 'Blog',
                email: 'E-posta'
            },
            title: 'Icerik uretiminin',
            titleHighlight: 'yeni standardi.',
            description: 'Yapay zeka ile saniyeler içinde SEO uyumlu blog yazıları ve sosyal medya içerikleri oluşturun.',
            features: {
                aiAssistant: {
                    title: 'AI Asistan',
                    description: 'Sizin dilinizden anlayan, markanıza özel içerik üreten akıllı asistan.'
                },
                happyUsers: {
                    title: '10.000+ Mutlu Kullanıcı',
                    description: 'Dünya genelinde binlerce içerik üreticisi Lobster Lead\'e güveniyor.'
                }
            }
        }
    },
    en: {
        login: {
            title: 'Sign In',
            subtitle: 'Access your account to continue.',
            googleButton: 'Continue with Google',
            or: 'OR',
            emailLabel: 'Email',
            emailPlaceholder: 'name@company.com',
            passwordLabel: 'Password',
            passwordPlaceholder: '••••••••',
            rememberMe: 'Remember Me',
            forgotPassword: 'Forgot Password',
            loginButton: 'Sign In',
            noAccount: 'Don\'t have an account?',
            createAccount: 'Create Account',
            footer: {
                copyright: '© 2026 Lobster Lead Inc.',
                privacy: 'Privacy Policy',
                terms: 'Terms of Service'
            }
        },
        hero: {
            version: 'v2.0 Live',
            badge: {
                brand: 'Brand',
                aiAssistant: 'AI Powered',
                socialMedia: 'Social Media',
                blog: 'Blog',
                email: 'Email'
            },
            title: 'The new standard',
            titleHighlight: 'of content creation.',
            description: 'Create SEO-friendly blog posts and social media content in seconds with AI.',
            features: {
                aiAssistant: {
                    title: 'AI Assistant',
                    description: 'Smart assistant that understands your language and creates content for your brand.'
                },
                happyUsers: {
                    title: '10,000+ Happy Users',
                    description: 'Thousands of content creators worldwide trust Lobster Lead.'
                }
            }
        }
    }
}

export const useTranslations = (language: 'tr' | 'en') => {
    return translations[language]
}
