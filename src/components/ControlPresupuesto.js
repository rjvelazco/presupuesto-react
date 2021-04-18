import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuerto: ${presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: ${restante}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.propTypes = {
    Presupusto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;