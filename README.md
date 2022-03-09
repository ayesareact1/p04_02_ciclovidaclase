# Ciclo de vida en componentes de tipo clase

1.- Etapa ciclo vida Montaje del componente ("Cuando su etiqueta aparece en una pantalla y
por tanto se ha de renderizar")

constructor() => Lo utilizamos normalmente para inicializar el estado
render() => Retornar la vista del componente en JSX
componentDidMount() => Lo utilizamos normalmente para realizar peticiones (de datos) y volver a setear el estado

2.- Etapa ciclo vida Actualización del componente (Cada vez que hay cambios en el objeto de estado del componente)

render() => Con cada cambio de estado se vuelve a ejecutar render para pintar de nuevo el componente
componentDidUpdate(prevProps, prevState) => se ejecuta cada vez que haya actualización del estado
*ojo: aunque nos devuelve como argumentos las props y estado previo solo se dispara con cambios de estado.

Cada actualización del estado también produce el renderizado y por tanto el mismo ciclo en los componentes hijos

3.- Etapa ciclo vida Desmontaje del componente ("cuando deja de estar en pantalla")

componentWillUnmount() => Realizar labores de limpieza (matar timers, desuscribirnos...)

