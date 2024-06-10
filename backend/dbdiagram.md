Enum Role {
Admin
Doctor
Paciente
}

Table user {
id int [pk, increment]
name varchar
phone varchar
email varchar
password varchar
role Role [default: 'Paciente']
created_at timestamp
updated_at timestamp
}

// > many-to-one; < one-to-many; - one-to-one; <> many-to-many
Ref: user.id < doctor_info.doctor_id

table patient_info {
id int [pk, increment]
patient_id int [note: 'ID correspondiente a la tabla user con rol de paciente']
antecedentes varchar
created_at timestamp
updated_at timestamp
}

Ref: patient_info.patient_id > user.id

table doctor_info{
id int [pk, increment]
doctor_id int
//specialization varchar [note: 'Cardiología, oftalmología, endocrinología']
specialization_id int
}

Ref: doctor_info.specialization_id > specialization.id

table appointment {
id int [pk, increment]
doctor_info_id int [note: 'ID correspondiente a la tabla user con rol de doctor']
date date
time time
observations text
patient_info_id int
created_at timestamp
updated_at timestamp
}

Ref: appointment.doctor_info_id >doctor_info.id
Ref: appointment.patient_info_id >patient_info.id

Table specialization{
id int
name varchar
}

/_
doctor_info
id: 1; doctor_id: 1; spe: 1
id: 2; doctor_id: 1; spe: 2
id: 3; doctor_id: 2; spe: 1
_/
