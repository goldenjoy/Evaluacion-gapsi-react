function getSuspender(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      if (res && res._embedded && res._embedded.proveedors) {
        //console.log(res);
        //console.log(res._embedded.proveedors);
        response = res._embedded.proveedors;
      } else {
        //console.log(res);
        response = res;
      }
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
}

export function fetchGet(url) {
  const promise = fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => data);

  return getSuspender(promise);
}
