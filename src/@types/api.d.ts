namespace Api {
  type LoginRequest = {
    email: string
    password: string
  }

  type LoginResponse = {
    success: true
    data: {
      type: string
      message: string
      data: {
        user: {
          id: number
          created_at: string
          updated_at: string
          firstname: string
          lastname: string
          email: string
          password: string
          role: string
          verified: boolean
        }
        token: string
      }
    }
  }

  type AssetDetailsType = {
    id: number
    name: string
    file_type: string
    label?: string
  }

  interface BasicOverViewService {
    date: string
  }

  interface Base<T> {
    success: boolean
    data: {
      type: string
      message: string
      data: T
    }
  }

  interface PaginatedData<T> {
    total: string
    rows: Array<T>
    isLast: boolean
  }

  interface BasicOverView {
    total_mins_worked_today: number
    total_mins_worked_this_week: number
  }

  interface DaySummery {
    cur_date: string
    paid_mins: number
    unpaid_mins: number
  }

  interface WeekSummery {
    details: Array<DaySummery>
    total_paid_mins: number
    total_unpaid_mins: number
  }

  interface EachScheduleTicket {
    total_count: number
    ticket_details: {
      id: number
      title: string
      status: string
      due_date: string
      created_at: string
      is_invoiced: boolean
      site_visit_id: number
      ticket_number: number
      project_form_id: number
      project_plan_id: number
      progress_percent: number
      layer_coordinates: Array<number>
      quote_line_item_id: number
      report_layer_coordinates: Array<number>
    }
    project_details: {
      id: number
      title: string
    }
    site_visit_details: {
      id: number
      title: string
    }
  }

  interface ScheduleTickets extends PaginatedData<EachScheduleTicket> {}

  interface EachTimeSheet {
    total_count: number
    project_details: {
      id: number
      title: string
    }
    ticket_details: {
      id: number
      title: string
    }
    user_details: {
      id: number
      lastname: string
      display_name: string
    }
    project_labour_entry_details: {
      id: number
      time_mins: number
      is_invoiced: boolean
      completed_at: string
      is_worker_paid: boolean
      name: string
    }
  }

  interface TimeSheetList extends PaginatedData<EachTimeSheet> {}

  interface TotalHrsWorked {
    total_worked_hrs: number
    total_unpaid_hrs: number
  }

  interface TicketDetailIndividual {
    total_count?: number
    ticket_details?: {
      id: number
      title: string
      status: string
      due_date: string
      created_at: string
      site_visit_id: number
      project_form_id: number
      project_plan_id: number
      layer_coordinates: [number, number]
      quote_line_item_id: number
      progress_percent: number
      report_layer_coordinates: [number, number]
      is_invoiced: boolean
      ticket_number: number
    }
    ticket_owner_details?: {
      id: number
      lastname: string
      display_name: string
    }
    parent_ticket_details?: TicketDetailIndividual['ticket_details']
    assigned_employees?: Array<{
      user_details: {
        id: number
        lastname: string
        display_name: string
      }
      employe_details?: {
        id: number
        ticket_id: number
        scheduled_to: string
        scheduled_from: string
      }
    }>
    sub_tickets_count?: number
  }

  interface ProjectDetailIndividual {
    project_details: {
      id: number
      title: string
      site_id: number
      website: string
      end_date: string
      pay_rate: number
      created_at: string
      start_date: string
      customer_id: number
      description: string
      project_type: string
      project_number: number
      project_prefix: string
      project_status: string
    }
    site_address_details: {
      id: number
      city: string
      place: string
      state: string
      suburb: string
      address: string
      country: string
      zip_code: number
      coordinates: number[]
    }
    site_contact_details: {
      id: number
      fax: string
      emails: string[]
      phones: string
      lastname: string
      position: string
      websites: string
      firstname: string
      other_phones: string
    }
    customer_address_details: {
      id: 7
      city: string
      place: string
      state: string
      suburb: string
      address: string
      country: string
      zip_code: number
      coordinates: number[]
    }
    customer_contact_details: ProjectDetailIndividual['site_contact_details']
    customer_details: {
      id: number
      name: string
      info_id: number
      is_active: boolean
      company_id: number
    }
    site_details: {
      id: number
      info: number
      name: string
      status: string
    }
  }

  interface IndividualComment {
    total_count: number
    log_details: {
      id: number
      type: string
      message: string
      ticket_id: number
      created_at: string
    }
    user_details: {
      display_name: string
      lastname: string
    }
    asset_details: null
  }

  interface CommentList extends PaginatedData<IndividualComment> {}

  interface CommentPost {}

  interface TicketAssetIndividual {
    total_count: number
    asset_details: {
      id: number
      name: string
      label: string
      file_type: string
    }
    ticket_labour_element_details: {
      id: number
      ticket_id: number
      completed_by: number
      is_completed: boolean
      is_mandatory: boolean
      has_attachments: boolean
      quote_labour_element_id: number
    }
    ticket_asset_details: {
      id: number
      ticket_id: number
    }
  }

  interface GetTicketAssets extends PaginatedData<TicketAssetIndividual> {}
}
