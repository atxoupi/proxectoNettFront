

export const Contact = () => {
    return (
        <div className="w-50 m-auto mt-5">
            <h2 className="text-center mt-5">Contacto</h2>
            <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="email" class="form-control" id="name" placeholder="Nombre"/>
                <label for="correo" class="form-label">Correo</label>
                <input type="email" class="form-control" id="correo" placeholder="nombre@ejemplo.com"/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">En que puedo ayudarte:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type="button" class="btn btn-outline-dark mt-4">Enviar</button>
            </div>
        </div>
    )
}