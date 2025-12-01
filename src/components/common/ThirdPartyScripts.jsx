import { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * Componente centralizado para gerenciar scripts de terceiros
 * Usa next/script com estratégia lazyOnload para evitar bloqueio da thread principal
 */
const ThirdPartyScripts = () => {
    const [loadChat, setLoadChat] = useState(false);

    useEffect(() => {
        // Carrega chat widget apenas após primeira interação do usuário
        // Isso evita bloqueio da thread principal durante hidratação
        const handleUserInteraction = () => {
            setLoadChat(true);
            // Remove listeners após primeira interação
            window.removeEventListener('scroll', handleUserInteraction);
            window.removeEventListener('mousemove', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
        };

        // Timeout de segurança: carrega após 5s mesmo sem interação
        const timeoutId = setTimeout(() => {
            setLoadChat(true);
        }, 5000);

        // Adiciona listeners para primeira interação
        window.addEventListener('scroll', handleUserInteraction, { passive: true });
        window.addEventListener('mousemove', handleUserInteraction, { passive: true });
        window.addEventListener('touchstart', handleUserInteraction, { passive: true });

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleUserInteraction);
            window.removeEventListener('mousemove', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
        };
    }, []);

    return (
        <>
            {/* Google Tag Manager */}
            {process.env.NEXT_PUBLIC_GTM_ID && (
                <>
                    <Script
                        id="google-tag-manager"
                        strategy="lazyOnload"
                        src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                    />
                    <Script
                        id="gtm-init"
                        strategy="lazyOnload"
                        dangerouslySetInnerHTML={{
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                        }}
                    />
                </>
            )}

            {/* Meta Pixel (Facebook) */}
            {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
                <Script
                    id="facebook-pixel"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
                    }}
                />
            )}

            {/* Hotjar */}
            {process.env.NEXT_PUBLIC_HOTJAR_ID && (
                <Script
                    id="hotjar"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
                    }}
                />
            )}

            {/* Chat Widget - Carrega apenas após interação do usuário */}
            {loadChat && process.env.NEXT_PUBLIC_CHAT_WIDGET_URL && (
                <Script
                    id="chat-widget"
                    strategy="lazyOnload"
                    src={process.env.NEXT_PUBLIC_CHAT_WIDGET_URL}
                />
            )}

            {/* WhatsApp Widget - Carrega apenas após interação do usuário */}
            {loadChat && process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
                <Script
                    id="whatsapp-widget"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                var wa = document.createElement('a');
                wa.href = 'https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}';
                wa.className = 'whatsapp-float';
                wa.target = '_blank';
                wa.rel = 'noopener noreferrer';
                wa.innerHTML = '<img src="/img/icons/whatsapp.svg" alt="WhatsApp" />';
                document.body.appendChild(wa);
              })();
            `,
                    }}
                />
            )}
        </>
    );
};

export default ThirdPartyScripts;
