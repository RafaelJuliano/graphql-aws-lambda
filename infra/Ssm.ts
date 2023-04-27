import { Resource } from './Resource'

// Secret Manager can be used here, but SSM is free :)
export class Ssm extends Resource {
  private ssmKeys = ['api-auth-token']

  private resource = 'ssm'

  private composeArnKey(ssmKey: string) {
    return `parameter/\${self:provider.stage}/sls/${ssmKey}`
  }

  public getAllRoles() {
    return this.ssmKeys.map(ssmKey =>
      this.createRole(this.resource, this.composeArnKey(ssmKey), ['ssm:GetParameter']),
    )
  }
}
