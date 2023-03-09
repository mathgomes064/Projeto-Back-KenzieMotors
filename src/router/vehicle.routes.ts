import { Router } from "express";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const vehicleRouter = Router();

import { vehicleCreateController } from "../controllers/vehicle/vehicleCreate.controller";
import vehicleDeleteController from "../controllers/vehicle/vehicleDelete.controller";
import { vehicleListController } from "../controllers/vehicle/vehicleList.controller";
import { vehicleListByIdController } from "../controllers/vehicle/vehicleListById.controller";
import { vehicleListCarsController } from "../controllers/vehicle/vehicleListCars.controller";
import { vehicleListMotorcyclesController } from "../controllers/vehicle/vehicleListMotorcycles.controller";
import { vehicleUpdateController } from "../controllers/vehicle/vehicleUpdate.controller";
import { getCarsByUserController } from "../controllers/vehicle/getCarByUser.controller";
import { getMotorcyclesByUserController } from "../controllers/vehicle/getMotorcyclesByUser.controller";

vehicleRouter.post("", authTokenMiddleware, vehicleCreateController);
vehicleRouter.get("", vehicleListController);
vehicleRouter.get("/cars", vehicleListCarsController);
vehicleRouter.get("/motorcycles", vehicleListMotorcyclesController);
vehicleRouter.get("/:id/cars", authTokenMiddleware, getCarsByUserController)
vehicleRouter.get("/:id/Motorcycles", authTokenMiddleware, getMotorcyclesByUserController)
vehicleRouter.get("/:id", vehicleListByIdController);
vehicleRouter.patch("/:id", authTokenMiddleware, vehicleUpdateController);
vehicleRouter.delete("/:id", authTokenMiddleware, vehicleDeleteController);

export default vehicleRouter;
