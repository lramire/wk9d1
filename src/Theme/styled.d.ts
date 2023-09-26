import 'styled-components'; 
import { Theme } from '@mui/material/styles'; 


// overridding styled-components using the Theme module 
declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}