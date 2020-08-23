import React from 'react';
import PropTypes from 'prop-types';

import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const Dialogo = ({ visible, setVisible, fiscalia, setFiscalia, update, save }) => {

    const { nombre, departamento, municipio, direccion, telefono } = fiscalia;

    const footer = (
        <div>
            <Button label="Guardar" icon="pi pi-check" onClick={() => (fiscalia.id === undefined) ? save() : update()} />
        </div>
    );

    function actualizarState(e) {
        setFiscalia({
            ...fiscalia,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Dialog header="Crear fiscalia" visible={visible} style={{ width: '400px' }} footer={footer} onHide={() => setVisible(false)}>
            <br />
            <span className="p-float-label">
                <InputText
                    name="nombre"
                    style={{ width: '100%' }}
                    onChange={actualizarState}
                    value={nombre || ''}
                />
                <label htmlFor="nombre">Nombre</label>
            </span>
            <br />
            <span className="p-float-label">
                <InputText
                    name="departamento"
                    style={{ width: '100%' }}
                    onChange={actualizarState}
                    value={departamento || ''}
                />
                <label htmlFor="departamento">Departamento</label>
            </span>
            <br />
            <span className="p-float-label">
                <InputText
                    name="municipio"
                    style={{ width: '100%' }}
                    onChange={actualizarState}
                    value={municipio || ''}
                />
                <label htmlFor="municipio">Municipio</label>
            </span>
            <br />
            <span className="p-float-label">
                <InputText
                    name="direccion"
                    style={{ width: '100%' }}
                    onChange={actualizarState}
                    value={direccion || ''}
                />
                <label htmlFor="direccion">Direccion</label>
            </span>
            <br />
            <span className="p-float-label">
                <InputText
                    name="telefono"
                    style={{ width: '100%' }}
                    onChange={actualizarState}
                    value={telefono || ''}
                />
                <label htmlFor="telefono">Telefono</label>
            </span>
        </Dialog>
    );
}

Dialogo.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
    fiscalia: PropTypes.object.isRequired,
    setFiscalia : PropTypes.func.isRequired,
    update : PropTypes.func.isRequired,
    save : PropTypes.func.isRequired
}

export default Dialogo;