import "./css/styles.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions";

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", onSearch);

async function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const query = form.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      message: "Please enter a search query",
      position: "topRight",
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query);
    if (!images || images.length === 0) {
      iziToast.info({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    createGallery(images);
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: "Something went wrong. Please try again later.",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}
