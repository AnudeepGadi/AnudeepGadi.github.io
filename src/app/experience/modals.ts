export class Experience {
  private id: number;
  private company: string;
  private startdate: string;
  private enddate: string;
  private location: string;
  private position: string;
  private responsilities: string[];

  /**
   * Getter $startdate
   * @return {string}
   */
  public get $startdate(): string {
    return this.startdate;
  }

  /**
   * Getter $startdate
   * @return {string}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $enddate
   * @return {string}
   */
  public get $enddate(): string {
    return this.enddate;
  }

  /**
   * Getter $company
   * @return {string}
   */
  public get $company(): string {
    return this.company;
  }

  /**
   * Getter $location
   * @return {string}
   */
  public get $location(): string {
    return this.location;
  }

  /**
   * Getter $position
   * @return {string}
   */
  public get $position(): string {
    return this.position;
  }

  /**
   * Getter $responsilities
   * @return {string[]}
   */
  public get $responsilities(): string[] {
    return this.responsilities;
  }
  constructor(
    $id:number,
    $company: string,
    $startdate: string,
    $enddate: string,
    $location: string,
    $position: string,
    $responsilities: string[]
  ) {
    this.id = $id;
    this.company = $company;
    this.startdate = $startdate;
    this.enddate = $enddate;
    this.location = $location;
    this.position = $position;
    this.responsilities = $responsilities;
  }
}
