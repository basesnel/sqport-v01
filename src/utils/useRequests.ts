import { useEffect } from "react";

const useRequests = () => {
  useEffect(() => {
    const getVersions = () => {
      return fetch("/jsons/windows/versions.json").then((response) =>
        response.json(),
      );
    };

    const getPCReleases = () => {
      return fetch("/jsons/windows/pcreleases.json").then((response) =>
        response.json(),
      );
    };

    const getSVReleases = () => {
      return fetch("/jsons/windows/svreleases.json").then((response) =>
        response.json(),
      );
    };

    const getMBReleases = () => {
      return fetch("/jsons/windows/mbreleases.json").then((response) =>
        response.json(),
      );
    };

    const getRMReleases = () => {
      return fetch("/jsons/windows/rmreleases.json").then((response) =>
        response.json(),
      );
    };

    const getPorts = () => {
      return fetch("/jsons/ports/ports.json").then((response) =>
        response.json(),
      );
    };

    try {
      getPorts().then((value) => console.log(value));
      getVersions().then((value) => {
        console.log(value);
        getPCReleases().then((value) => console.log(value));
        getSVReleases().then((value) => console.log(value));
        getMBReleases().then((value) => console.log(value));
        getRMReleases().then((value) => console.log(value));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export { useRequests };
