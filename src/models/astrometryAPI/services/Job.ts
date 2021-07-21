import {request} from "../core/request";
import {JobResult} from "../models/JobResult";

export class Job{

    public static async getJobResult(jobID:number):Promise<JobResult>{
        const res = await request({
            method:"GET",
            path:"/jobs/"+jobID+"/info/"
        })
        return await res.json();
    }

    public static getRedGreenURL(jobID:number):string{
        return "https://nova.astrometry.net/red_green_image_display/"+jobID;
    }

    public static getAnnotatedURL(jobID:number):string{
        return "https://nova.astrometry.net/annotated_display/"+jobID;
    }
}