import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {

    Route.group(() => {
        Route.get('/booking', 'ReportsController.booking').as('reports.booking')
        Route.get('/staff', 'ReportsController.staff').as('reports.staff')
        Route.get('/customers', 'ReportsController.customers').as('reports.customers')
        Route.get('/monthly', 'ReportsController.monthly').as('reports.monthly')
        Route.get('/rooms', 'ReportsController.rooms').as('reports.rooms')
        Route.get('/invoice', 'ReportsController.invoice').as('reports.invoices')
    }).prefix('reports').middleware(['auth'])
}).prefix('peot')
