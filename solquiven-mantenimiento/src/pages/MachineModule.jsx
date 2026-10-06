/**
 * @file MachineModule.jsx
 * @description Módulo de máquinas. Controla la vista entre la lista de máquinas y su detalle.
 */
import React, { useState } from 'react';
import MachineList from '../components/machines/MachineList';
import MachineDetails from '../components/machines/MachineDetails';
// Nota: CSS importado según tu estructura original solicitada si requieres estilos específicos de vista
// import styles from './MachineModule.module.css'; 

const MachineModule = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);

  if (selectedMachine) {
    return <MachineDetails machine={selectedMachine} onBack={() => setSelectedMachine(null)} />;
  }
  return <MachineList onSelectMachine={setSelectedMachine} />;
};

export default MachineModule;