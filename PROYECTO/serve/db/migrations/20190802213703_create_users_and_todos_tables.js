
exports.up = function (knex) {
    return knex.schema
        .createTable('docente', function (table) {
            table.increments('id_docente');
            table.string('cedula ', 50).notNullable();
            table.string('apellido_paterno ', 50).notNullable();
            table.string('apellido_materno ', 50).notNullable();
            table.string('nombre1', 50).notNullable();
            table.string('nombre2 ', 50).notNullable();
            table.string('correo_insti', 50).notNullable();
            table.string('contrato', 50).notNullable();
            table.string('n_horas', 50).notNullable();
        })
        .createTable('asignaturas', function (table) {
            table.increments('id_asignaturas');
            table.string('nombre', 50).notNullable();
            table.integer('malla').notNullable();
            table.integer('nivel').notNullable();
            table.foreign('malla').references('id_malla').inTable('tipo_de_malla');
            table.foreign('nivel').references('id_nivel').inTable('nivel');
        })
        .createTable('tipo_de_malla', function (table) {
            table.increments('id_malla');
            table.string('malla_nueva', 50).notNullable();
            table.string('malla_antigua').notNullable();
            table.date('fecha_aprobada').notNullable();
        })
        .createTable('nivel', function (table) {
            table.increments('id_nivel ');
            table.string('nombre', 50).notNullable();
        })
        .createTable('paralelo', function (table) {
            table.increments('id_paralelo  ');
            table.string('nombre', 50).notNullable();
            table.integer('nivel').notNullable();
            table.foreign('nivel').references('id_nivel').inTable('nivel');
        })
        .createTable('curso', function (table) {
            table.increments('id_curso   ');
            table.string('nombre', 50).notNullable();
            table.integer('nivel').notNullable();
            table.integer('paralelo').notNullable();
            table.foreign('nivel').references('id_nivel').inTable('nivel');
            table.foreign('paralelo').references('id_paralelo').inTable('paralelo');
        })
        .createTable('asignacion', function (table) {
            table.increments('id_asignacion  ');
            table.date('fecha_asignacion', 50).notNullable();
            table.integer('docente').notNullable();
            table.foreign('docente').references('id_docente').inTable('docente');
        })
        .createTable('detalle_asignacion', function (table) {
            table.increments('id_detalle_asignacion  ');

        })

};

exports.down = function (knex) {
    return knex.schema.dropTable('docente')
        .dropTable('asignaturas')
        .dropTable('tipo_de_malla')
        .dropTable('nivel')
        .dropTable('paralelo')
        .dropTable('curso')
        .dropTable('asignacion')
        .dropTable('detalle_asignacion')
};
