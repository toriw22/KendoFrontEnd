export class Device {
    pump_status: {
        warnings: string;
        s3: number;
        motor_current_ma: number;
        axial_z: number;
        motor_current_voltage: number;
        pump_rotation_speed: number;
        radial_xh: number;
        radial_yh: number;
        radial_xb: number;
        radial_yb: number;
        edu_temp_c: number;
        s1: number;
        pump_temperature_c: number;
    }
    id: string;
    epochtime: number;
}