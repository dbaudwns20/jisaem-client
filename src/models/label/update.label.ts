import { RequestLabelUpdate } from "@/protos/label/label_communication_pb";

/**
 * 레이블 수정 Interface
 */
export interface UpdateLabel {
  id: string,
  name?: string,
  description?: string,
  color?: string
}

function bindUpdateLabel(data: any): UpdateLabel {
  return {
    id: data.id,
    name: data?.name,
    description: data?.description,
    color: data?.color
  }
}

function getRequestLabelUpdate(updateLabel: UpdateLabel): RequestLabelUpdate {
  const request = new RequestLabelUpdate()
  request.setId(updateLabel.id)
  request.setName(updateLabel.name!)
  request.setColor(updateLabel.color!)
  request.setDescription(updateLabel.description!)
  return request
}

export { bindUpdateLabel, getRequestLabelUpdate }
