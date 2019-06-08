import { JsonController, Get, Post, Param, Body, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { DatoAmbiental } from "../entity/DatoAmbiental";


@JsonController()
export class DatoAmbientalControlador {

    private datoRepositorio = getRepository(DatoAmbiental);

    @Get("/datoAmbiental")
    getAll() {
        return this.datoRepositorio.find({ relations: ['valores'] });
    }

    @Get("/datoAmbiental/:id")
    // @OnUndefined(UserNotFoundError)
    getOne(@Param("id") id: number) {
        console.log('Id ' + id.toString.length)
        return this.datoRepositorio.findOne(id);
    }

    @Post("/datoAmbiental")
    post(@Body() user: any) {
        return this.datoRepositorio.save(user);
    }

    @Put("/datoAmbiental/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/datoAmbiental/:id")
    async remove(@Param("id") id: number) {
        let datoARemover = await this.datoRepositorio.findOne(id);
        return this.datoRepositorio.remove(datoARemover);
    }
}