import 'focus-visible/dist/focus-visible'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true,
    },
    fonts: {
        heading: `vt323, monospace`,
        body: `vt323, monospace`,
        h4: `vt323, monospace`,
    },
    styles: {
        global: {
            'html, body': {
                height: '100%',
                backgroundColor: '#2B2E38',
                padding: '15px',
            },
            ', #__next, .css-0': {
                // overflow: 'hidden',
                height: '100%',
            },
        },
    },
})
