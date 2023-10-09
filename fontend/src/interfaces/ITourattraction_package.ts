import { Tourist_attractionInterface } from "./ITourist_attraction";
import { PackageInterface } from "./IPackage";


export interface TourAttraction_packageInterface {
    TourAttractionID?: Tourist_attractionInterface;
    PackageID?: PackageInterface;
}