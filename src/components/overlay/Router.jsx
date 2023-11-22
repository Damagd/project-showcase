import { useListenToPath } from "../../hooks/useListenToPath";

export function Router({routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>  }) {
  const {currentPath} = useListenToPath();


  const element = routes.find(({path}) => path === currentPath);
  const Page = element?.Component;

  return Page ? <Page /> : <DefaultComponent/>
}