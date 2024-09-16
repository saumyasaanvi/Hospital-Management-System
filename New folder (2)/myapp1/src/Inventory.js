import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import InventoryTracker from './InventoryTracker';
import PurchaseOrder from './PurchaseOrder';
import VendorManagement from './VendorManagement';
import EquipmentManagement from './EquipmentManagement';
import './Inventory.css';

function Inventory() {
  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', padding: '20px' }}>
      <h1 className='title'>Inventory Management</h1>
      <div className='update'>
      <Tabs>
        <TabList>
          <Tab>Inventory Tracker</Tab>
          <Tab>Purchase Order</Tab>
          <Tab>Vendor Management</Tab>
          <Tab>Equipment Maintenance</Tab>
        </TabList>

        <TabPanel>
          <InventoryTracker />
        </TabPanel>
        <TabPanel>
          <PurchaseOrder />
        </TabPanel>
        <TabPanel>
          <VendorManagement />
        </TabPanel>
        <TabPanel>
          <EquipmentManagement />
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
}

export default Inventory;
