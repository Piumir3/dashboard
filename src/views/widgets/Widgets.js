import React from 'react'
import {
  CCardGroup,
  CCardFooter,
  CCol,
  CLink,
  CRow,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
  CWidgetSimple,
  CProgress,
} from '@coreui/react'
 
import WidgetsDropdown from './WidgetsDropdown'

 
 

const Widgets = () => {
  return (
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress color="success" header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress color="info" header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress color="warning" header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim.">
            <CProgress color="danger" animated size="xs" className="my-3" value={75}/>
          </CWidgetProgress>
        </CCol>

        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress inverse color="success" variant="inverse" header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress inverse color="info" variant="inverse" header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress inverse color="warning" variant="inverse" header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetProgress inverse color="danger" variant="inverse" value={95} header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."/>
        </CCol>

      </CRow>

      
    </>
  )
}

export default Widgets
