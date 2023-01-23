/**
 * Model class 공통기능
 */
export class Model {

  /**
   * 데이터 Set
   * @param type
   * @param proto
   * @protected
   */
  protected set<T, K>(type: { new ({}: K): T}, proto: K): T {
    return new type(proto)
  }

  /**
   * 리스트 형 데이터 Set
   * @param type
   * @param protoList
   * @protected
   */
  protected setList<T, K>(type: { new ({}: K): T}, protoList: K[]): T[] {
    const list: T[] = []
    protoList.forEach((it: K) => {
      list.push(new type(it))
    })
    return list
  }

  /**
   * Date Format
   */
  // TODO google_protobuf_timestamp_pb 에 대한 컨버트 기능을 구현
  protected convertToDate(): Date | string {
    return new Date()
  }
}
