import { createSSRApp } from "vue";
import App from "./App.vue";
import "@/routes/interceptor";
// @ts-ignore
import uView from "vk-uview-ui";
import "vk-uview-ui/index.scss";
export function createApp() {
	const app = createSSRApp(App);
	app.use(uView);
	return {
		app,
	};
}
