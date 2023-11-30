import { useListenToPath } from "../../hooks/useListenToPath";
import { EmptyPage } from "./EmptyPage";

export function Router({routes = [], defaultComponent: DefaultComponent = () => <EmptyPage />  }) {
  const {currentPath} = useListenToPath();


  const element = routes.find(({path}) => path === currentPath);
  const Page = element?.Component;

  return Page ? <Page /> : <DefaultComponent/>
}