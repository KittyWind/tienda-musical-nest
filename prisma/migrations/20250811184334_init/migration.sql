-- CreateTable
CREATE TABLE "public"."Modelo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL,

    CONSTRAINT "Modelo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Modelo_nombre_key" ON "public"."Modelo"("nombre");
